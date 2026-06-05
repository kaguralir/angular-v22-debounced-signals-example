import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

export interface ProductDetail {
  tag?: { label: string; severity: 'secondary' | 'info' | 'success' | 'danger' | 'warn' | 'contrast' };
  name: string;
  qtyOriginal?: number;
  qty: number;
  ref: string;
  location: string;
  locationOptions?: string[];
}

@Component({
  selector: 'app-product-detail-card',
  standalone: true,
  imports: [CommonModule, TagModule, SelectModule, FormsModule],
  template: `
    <div class="card">
      @if (product().tag) {
        <p-tag
          [value]="product().tag!.label"
          [severity]="product().tag!.severity"
          class="card-tag"
        />
      }
      <div class="card-main">
        <span class="product-name">{{ product().name }}</span>
        <div class="qty-block">
          @if (product().qtyOriginal) {
            <span class="qty-original">x{{ product().qtyOriginal }}</span>
          }
          <span class="qty-current">x{{ product().qty }}</span>
        </div>
      </div>
      <div class="card-footer">
        <span class="ref">{{ product().ref }}</span>
        <div class="location-select">
          @if (product().locationOptions) {
            <p-select
              [options]="product().locationOptions!"
              [ngModel]="product().location"
              styleClass="location-dropdown"
            >
              <ng-template pTemplate="selectedItem" let-val>
                <div class="loc-item">
                  <i class="pi pi-map-marker"></i>
                  <span>{{ val }}</span>
                </div>
              </ng-template>
              <ng-template pTemplate="item" let-opt>{{ opt }}</ng-template>
            </p-select>
          } @else {
            <div class="loc-item static">
              <i class="pi pi-map-marker"></i>
              <span>{{ product().location }}</span>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background: #fff;
      border-radius: 16px;
      padding: 14px 16px;
      box-shadow: 0px 2px 8px rgba(0,0,0,0.05);
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 220px;
    }
    .card-main {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .product-name {
      font-weight: 700;
      font-size: 0.95rem;
      color: #1D1D1D;
    }
    .qty-block {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .qty-original {
      color: #84858C;
      font-size: 0.85rem;
      text-decoration: line-through;
    }
    .qty-current {
      font-weight: 700;
      font-size: 0.95rem;
    }
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
    .ref {
      color: #696A71;
      font-size: 0.85rem;
    }
    .loc-item {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.85rem;
      color: #1D1D1D;

      i { color: #84858C; font-size: 0.8rem; }
    }
    :host ::ng-deep .location-dropdown {
      background: transparent !important;
      border: none !important;
      box-shadow: none !important;
      padding: 0 !important;
      min-width: unset;
      font-size: 0.85rem;
      font-weight: 400;

      .p-select-label { padding: 0; }
      .p-select-dropdown { width: auto; }
    }
    .card-tag {
      align-self: flex-start;
    }
  `],
})
export class ProductDetailCardComponent {
  product = input.required<ProductDetail>();
}
