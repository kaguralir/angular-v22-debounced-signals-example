import { Component, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

export interface Tab {
  label: string;
  value: string;
}

@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="tab-bar">
      @for (tab of tabs(); track tab.value) {
        <button
          class="tab-btn"
          [class.active]="activeTab() === tab.value"
          (click)="activeTab.set(tab.value)"
        >
          {{ tab.label }}
        </button>
      }
    </div>
  `,
  styles: [`
    .tab-bar {
      display: flex;
      background: #E6E6E7;
      border-radius: 16px;
      padding: 4px;
      gap: 2px;
    }
    .tab-btn {
      flex: 1;
      border: none;
      background: transparent;
      border-radius: 12px;
      padding: 10px 18px;
      font-size: 0.9rem;
      font-weight: 500;
      color: #696A71;
      cursor: pointer;
      transition: background 0.15s, color 0.15s;
      white-space: nowrap;

      &.active {
        background: #F58220;
        color: #fff;
        font-weight: 700;
      }
    }
  `],
})
export class TabBarComponent {
  tabs = input.required<Tab[]>();
  activeTab = model('');
}
