import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-albums',
  imports: [],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class Albums implements OnInit {
  private albumService = inject(AlbumService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  albums: Album[] = [];
  loading = true;
  deletingIds = new Set<number>();
  errorMessage = '';

  ngOnInit(): void {
    this.loadAlbums();

    this.router.events.subscribe(() => {
      this.loadAlbums();
    });
  }

  loadAlbums(): void {
    this.loading = true;

    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        this.errorMessage = 'Failed to load albums.';
      }
    });
  }

  openAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();
    this.deletingIds.add(id);

    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter((album) => album.id !== id);
        this.deletingIds.delete(id);
      },
      error: () => {
        this.errorMessage = `Failed to delete album #${id}.`;
        this.deletingIds.delete(id);
      }
    });
  }

  isDeleting(id: number): boolean {
    return this.deletingIds.has(id);
  }

  trackByAlbumId(index: number, album: Album): number {
    return album.id;
  }
}