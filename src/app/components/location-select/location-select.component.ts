import { Component, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-location-select',
  standalone: true,
  imports: [CommonModule, SelectModule, FormsModule],
  template: `
    <div class="loc-wrapper">
      @if (label()) {
        <label class="loc-label">{{ label() }}</label>
      }
      <p-select
        [options]="options()"
        [(ngModel)]="selected"
        styleClass="loc-select"
      >
        <ng-template pTemplate="selectedItem" let-val>
          <div class="loc-item">
            <i class="pi pi-map-marker"></i>
            <span>{{ val }}</span>
          </div>
        </ng-template>
        <ng-template pTemplate="item" let-opt>
          <span>{{ opt }}</span>
        </ng-template>
      </p-select>
    </div>
  `,
  styles: [`
    .loc-wrapper {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .loc-label {
      font-size: 0.85rem;
      color: #84858C;
    }
    .loc-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.9rem;

      i { color: #84858C; font-size: 0.85rem; }
    }
    :host ::ng-deep .loc-select {
      background: transparent !important;
      border: none !important;
      box-shadow: none !important;

      .p-select-label {
        padding: 4px 0;
      }
    }
  `],
})
export class LocationSelectComponent {
  label = input('');
  options = input<string[]>([]);
  value = model('');

  get selected() { return this.value(); }
  set selected(v: string) { this.value.set(v); }
}
