import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-album-detail',
  imports: [FormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);
  private cdr = inject(ChangeDetectorRef);

  album: Album | null = null;
  editedTitle = '';
  loading = true;
  saving = false;
  message = '';
  errorMessage = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      if (!id) {
        this.loading = false;
        this.errorMessage = 'Invalid album id.';
        return;
      }

      this.loadAlbum(id);
    });
  }

  loadAlbum(id: number): void {
    this.loading = true;
    this.message = '';
    this.errorMessage = '';
    this.album = null;

    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.editedTitle = album.title;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load album:', err);
        this.errorMessage = 'Failed to load album details.';
        this.loading = false;
      }
    });
  }

  saveAlbum(): void {
    if (!this.album) return;

    const trimmedTitle = this.editedTitle.trim();
    if (!trimmedTitle) {
      this.errorMessage = 'Title cannot be empty.';
      return;
    }

    this.saving = true;
    this.message = '';
    this.errorMessage = '';

    const updatedAlbum: Album = {
      ...this.album,
      title: trimmedTitle
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (album) => {
        this.album = album;
        this.editedTitle = album.title;
        this.message = 'Album updated successfully.';
        this.saving = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to save album:', err);
        this.errorMessage = 'Failed to update album.';
        this.saving = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}