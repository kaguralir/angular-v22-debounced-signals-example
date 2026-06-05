import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    ButtonModule, InputTextModule, IconFieldModule, InputIconModule,
    TagModule, SelectModule, CheckboxModule, CardModule,
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  searchQuery = '';
  selectedLocation = 'Allée A-03 (4)';
  locationOptions = ['Allée A-03 (4)', 'Allée A-02', 'Allée C-24', 'Hall 19'];
  activeTab = signal<'total' | 'en-cours'>('total');
  checked1 = false;
  checked2 = false;
  checked3 = true;
  checked4 = true;
}
