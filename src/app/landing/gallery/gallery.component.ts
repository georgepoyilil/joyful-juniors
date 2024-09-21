interface MediaItem {
    type: 'image' | 'video' | 'youtube';
    src: string;
    alt?: string; // For images
    title?: string;
  }

  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
  import { DomSanitizer } from '@angular/platform-browser';
//   import { MediaItem } from './media-item.interface'; // Adjust the path as needed
  
  @Component({
    selector: 'app-gallery', // Ensure this matches your routing
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    standalone: true,
    imports: [CommonModule]
  })
  export class GalleryComponent {
    mediaItems: MediaItem[] = [
      // Example images
      // { type: 'image', src: 'assets/img1.jpg', alt: 'Image 1' },
      // { type: 'image', src: 'assets/img2.jpg', alt: 'Image 2' },
      
      { type: 'youtube', src: 'https://www.youtube.com/embed/d4WOq20XVMw', title: 'Joyful Learning' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/nXHR4qGhGS4', title: 'Play Based Learning' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/mioO3_Ujyl8', title: 'Activity Based Curriculum' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/YHVtBtssy7Y', title: 'A Home Away from Home' },
    ];
    
    constructor(private sanitizer: DomSanitizer) {}
  
    getSafeUrl(url: string) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }
  