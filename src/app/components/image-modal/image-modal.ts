import { Component, Inject, signal, computed } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgStyle } from '@angular/common';
import { GalleryImage, GalleryService } from '../../services/gallery';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatTooltipModule, NgStyle],
  templateUrl: './image-modal.html',
  styleUrl: './image-modal.scss'
})
export class ImageModalComponent {
  zoomLevel = signal(1);
  isDragging = signal(false);
  dragStart = { x: 0, y: 0 };
  translateX = signal(0);
  translateY = signal(0);

  readonly minZoom = 1;
  readonly maxZoom = 4;
  readonly zoomStep = 0.5;

  canZoomIn  = computed(() => this.zoomLevel() < this.maxZoom);
  canZoomOut = computed(() => this.zoomLevel() > this.minZoom);

  allImages: GalleryImage[];
  currentIndex: number;

  constructor(
    public dialogRef: MatDialogRef<ImageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { image: GalleryImage; categoryId: string },
    private gallery: GalleryService
  ) {
    this.allImages = gallery.getByCategory(data.categoryId);
    this.currentIndex = this.allImages.findIndex(img => img.id === data.image.id);
  }

  get image(): GalleryImage { return this.allImages[this.currentIndex]; }
  get hasPrev(): boolean     { return this.currentIndex > 0; }
  get hasNext(): boolean     { return this.currentIndex < this.allImages.length - 1; }

  navigate(dir: -1 | 1): void {
    this.currentIndex += dir;
    this.resetZoom();
  }

  zoomIn():  void { if (this.canZoomIn())  this.zoomLevel.update(z => +(z + this.zoomStep).toFixed(1)); }
  zoomOut(): void { if (this.canZoomOut()) { this.zoomLevel.update(z => +(z - this.zoomStep).toFixed(1)); if (this.zoomLevel() === 1) this.resetTranslate(); } }
  resetZoom(): void { this.zoomLevel.set(1); this.resetTranslate(); }
  private resetTranslate(): void { this.translateX.set(0); this.translateY.set(0); }

  onWheel(e: WheelEvent): void {
    e.preventDefault();
    e.deltaY < 0 ? this.zoomIn() : this.zoomOut();
  }

  onMouseDown(e: MouseEvent): void {
    if (this.zoomLevel() <= 1) return;
    this.isDragging.set(true);
    this.dragStart = { x: e.clientX - this.translateX(), y: e.clientY - this.translateY() };
  }

  onMouseMove(e: MouseEvent): void {
    if (!this.isDragging()) return;
    this.translateX.set(e.clientX - this.dragStart.x);
    this.translateY.set(e.clientY - this.dragStart.y);
  }

  onMouseUp(): void { this.isDragging.set(false); }
}