import { Component, signal, computed, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { GalleryService, GalleryImage, Category } from '../../services/gallery';
import { ImageModalComponent } from '../image-modal/image-modal';
import { CategoryIconPipe } from '../../pipes/category-icon.pipe';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule,
    MatButtonModule, MatSelectModule, MatFormFieldModule, MatCardModule,
    MatDialogModule, MatTooltipModule, MatBadgeModule, MatDividerModule,
    MatChipsModule, FormsModule, NgClass, MatChipsModule, FormsModule, NgClass, 
    CategoryIconPipe,
  ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class GalleryComponent implements OnInit {
  sidenavOpen = signal(true);
  selectedCategoryId = signal<string>('all');
  hoveredImageId = signal<number | null>(null);
  searchQuery = signal('');

  categories: Category[] = [];

  filteredImages = computed(() => {
    const imgs = this.gallery.getByCategory(this.selectedCategoryId());
    const q = this.searchQuery().toLowerCase().trim();
    return q ? imgs.filter(i => i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)) : imgs;
  });

  selectedCategoryLabel = computed(() =>
    this.gallery.getCategoryLabel(this.selectedCategoryId())
  );

  constructor(private gallery: GalleryService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.categories = this.gallery.categories;
  }

  selectCategory(id: string): void {
    this.selectedCategoryId.set(id);
  }

  onDropdownChange(id: string): void {
    this.selectedCategoryId.set(id);
  }

  openModal(image: GalleryImage): void {
    this.dialog.open(ImageModalComponent, {
      data: { image, categoryId: this.selectedCategoryId() },
      panelClass: 'gallery-modal-panel',
      maxWidth: '95vw',
      maxHeight: '95vh',
    });
  }

  countForCategory(id: string): number {
    return this.gallery.getByCategory(id).length;
  }

  toggleSidenav(): void {
    this.sidenavOpen.update(v => !v);
  }
}
