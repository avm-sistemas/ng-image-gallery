import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../services/gallery';

@Pipe({ name: 'categoryIcon', standalone: true })
export class CategoryIconPipe implements PipeTransform {
  transform(categories: Category[], categoryId: string): string {
    return categories.find(c => c.id === categoryId)?.icon ?? 'grid_view';
  }
}
