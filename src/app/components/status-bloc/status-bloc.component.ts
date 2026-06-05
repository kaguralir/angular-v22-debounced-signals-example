import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-bloc',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="status-bloc">
      <i class="pi pi-qrcode status-icon"></i>
      <div class="status-text">
        <span class="title">{{ title() }}</span>
        <span class="subtitle">{{ subtitle() }}</span>
      </div>
    </div>
  `,
  styles: [`
    .status-bloc {
      display: flex;
      align-items: center;
      gap: 14px;
      background: #BBDEFB;
      border-radius: 16px;
      padding: 16px 20px;
    }
    .status-icon {
      font-size: 1.6rem;
      color: #1D1D1D;
      flex-shrink: 0;
    }
    .status-text {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .title {
      font-weight: 700;
      font-size: 1rem;
      color: #1D1D1D;
    }
    .subtitle {
      font-size: 0.85rem;
      color: #4D4D51;
    }
  `],
})
export class StatusBlocComponent {
  title = input('Prête à être scannée');
  subtitle = input('4 produits à valider');
}
