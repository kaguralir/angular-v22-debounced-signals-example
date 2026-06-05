import { Component, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

export interface SelectionProduct {
  name: string;
  qty: number;
  qtyOriginal?: number;
  ref: string;
  location: string;
  tag?: { label: string; severity: 'secondary' | 'info' | 'success' | 'danger' | 'warn' | 'contrast' };
  checked?: boolean;
}

@Component({
  selector: 'app-product-selection-card',
  standalone: true,
  imports: [CommonModule, TagModule, CheckboxModule, FormsModule],
  template: `
    <div class="sel-card" [class.checked]="checked()">
      @if (product().tag) {
        <p-tag
          [value]="product().tag!.label"
          [severity]="product().tag!.severity"
          class="sel-tag"
        />
      }
      <div class="sel-main">
        <p-checkbox [(ngModel)]="checkedValue" [binary]="true" />
        <span class="product-name">{{ product().name }}</span>
        <div class="qty-block">
          @if (product().qtyOriginal) {
            <span class="qty-original">x{{ product().qtyOriginal }}</span>
          }
          <span class="qty-current">x{{ product().qty }}</span>
          <i class="pi pi-pencil edit-icon"></i>
        </div>
      </div>
      <div class="sel-footer">
        <span class="ref">{{ product().ref }}</span>
        <div class="loc-item">
          <i class="pi pi-map-marker"></i>
          <span>{{ product().location }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sel-card {
      background: #fff;
      border-radius: 16px;
      padding: 14px 16px;
      box-shadow: 0px 2px 8px rgba(0,0,0,0.05);
      display: flex;
      flex-direction: column;
      gap: 8px;

      &.checked {
        background: #F0FAF4;
        border: 1.5px solid #27AB5E;
      }
    }
    .sel-tag {
      align-self: flex-start;
    }
    .sel-main {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .product-name {
      font-weight: 700;
      font-size: 0.95rem;
      color: #1D1D1D;
      flex: 1;
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
    .edit-icon {
      color: #F58220;
      font-size: 0.8rem;
      cursor: pointer;
    }
    .sel-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
    :host ::ng-deep .p-checkbox {
      .p-checkbox-box {
        border-radius: 6px;
        width: 20px;
        height: 20px;
      }
      &.p-checkbox-checked .p-checkbox-box {
        background: #27AB5E;
        border-color: #27AB5E;
      }
    }
  `],
})
export class ProductSelectionCardComponent {
  product = input.required<SelectionProduct>();
  checked = model(false);

  get checkedValue() { return this.checked(); }
  set checkedValue(v: boolean) { this.checked.set(v); }
}
