import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css'
})
export class AlbumPhotos implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);
  private cdr = inject(ChangeDetectorRef);

  albumId = 0;
  photos: Photo[] = [];
  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.albumId = Number(params.get('id'));

      if (!this.albumId) {
        this.loading = false;
        this.errorMessage = 'Invalid album id.';
        return;
      }

      this.loadPhotos();
    });
  }

  loadPhotos(): void {
    this.loading = true;
    this.errorMessage = '';
    this.photos = [];

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (photos) => {
        this.photos = photos;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load photos:', err);
        this.errorMessage = 'Failed to load album photos.';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}