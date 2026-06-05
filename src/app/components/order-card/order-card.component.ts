import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';

export interface Order {
  time: string;
  clientName: string;
  clientCode: string;
  productCount: number;
  zone: string;
  status?: 'en-cours' | 'modifiee';
  hasIndicator?: boolean;
}

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [CommonModule, TagModule],
  template: `
    <div class="order-card">
      <div class="order-header">
        <div class="time-block">
          @if (order().hasIndicator) {
            <span class="indicator"></span>
          }
          <span class="time">{{ order().time }}</span>
        </div>
        @if (order().status === 'en-cours') {
          <p-tag value="En cours" severity="info" />
        } @else if (order().status === 'modifiee') {
          <p-tag value="Modifiée" severity="secondary" />
        }
        <span class="zone">{{ order().zone }}</span>
      </div>
      <div class="client-name">{{ order().clientName }} · {{ order().clientCode }}</div>
      <div class="product-count">
        <i class="pi pi-box"></i>
        <span>{{ order().productCount }} produits</span>
        <span class="zone-badge">{{ order().zone }}</span>
      </div>
    </div>
  `,
  styles: [`
    .order-card {
      background: #fff;
      border-radius: 16px;
      padding: 14px 16px;
      box-shadow: 0px 2px 8px rgba(0,0,0,0.05);
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .order-header {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .time-block {
      display: flex;
      align-items: center;
      gap: 6px;
      flex: 1;
    }
    .indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #2196F3;
      flex-shrink: 0;
    }
    .time {
      font-size: 0.9rem;
      color: #696A71;
    }
    .zone {
      font-weight: 700;
      font-size: 0.95rem;
      color: #1D1D1D;
      margin-left: auto;
    }
    .client-name {
      font-weight: 700;
      font-size: 0.95rem;
      color: #1D1D1D;
    }
    .product-count {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
      color: #696A71;

      i { font-size: 0.85rem; }

      .zone-badge {
        margin-left: auto;
        font-weight: 700;
        color: #1D1D1D;
        font-size: 0.95rem;
      }
    }
    :host ::ng-deep .p-tag {
      font-size: 11px !important;
    }
  `],
})
export class OrderCardComponent {
  order = input.required<Order>();
}
