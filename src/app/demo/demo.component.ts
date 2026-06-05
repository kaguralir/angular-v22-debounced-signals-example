import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';

import { ProductDetailCardComponent, ProductDetail } from '../components/product-detail-card/product-detail-card.component';
import { OrderCardComponent, Order } from '../components/order-card/order-card.component';
import { ProductSelectionCardComponent, SelectionProduct } from '../components/product-selection-card/product-selection-card.component';
import { StatusBlocComponent } from '../components/status-bloc/status-bloc.component';
import { TabBarComponent, Tab } from '../components/tab-bar/tab-bar.component';
import { LocationSelectComponent } from '../components/location-select/location-select.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    ButtonModule, InputTextModule, TagModule, SelectModule, CheckboxModule,
    ProductDetailCardComponent, OrderCardComponent, ProductSelectionCardComponent,
    StatusBlocComponent, TabBarComponent, LocationSelectComponent,
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  searchQuery = signal('');

  productDetail: ProductDetail = {
    tag: { label: 'Qte modifiée', severity: 'secondary' },
    name: 'Sac de ciment Portland',
    qtyOriginal: 1,
    qty: 10,
    ref: 'EU440',
    location: 'Allée A-03 (4)',
    locationOptions: ['Allée A-03 (4)', 'Allée A-02', 'Allée C-24', 'Hall 19'],
  };

  orders: Order[] = [
    {
      time: '08:15',
      clientName: 'Dupont Construction',
      clientCode: 'CLNT0001',
      productCount: 4,
      zone: 'A12',
    },
    {
      time: '08:15',
      clientName: 'Dupont Construction',
      clientCode: 'CLNT0001',
      productCount: 4,
      zone: 'A12',
      status: 'en-cours',
      hasIndicator: true,
    },
    {
      time: '08:15',
      clientName: 'Dupont Construction',
      clientCode: 'CLNT0001',
      productCount: 4,
      zone: 'A12',
      status: 'modifiee',
    },
  ];

  selectionProducts: SelectionProduct[] = [
    {
      name: 'Sac de ciment Portland',
      qty: 10,
      ref: 'PROD-001',
      location: 'Allée A-03 (4)',
    },
    {
      name: 'Sac de ciment Portland',
      qty: 10,
      qtyOriginal: 2,
      ref: 'PROD-001',
      location: 'Allée A-03',
      tag: { label: 'Qte modifiée', severity: 'secondary' },
    },
    {
      name: 'Sac de ciment Portland',
      qty: 10,
      ref: 'PROD-001',
      location: 'Allée A-03',
      checked: true,
    },
    {
      name: 'Sac de ciment Portland',
      qty: 10,
      qtyOriginal: 2,
      ref: 'PROD-001',
      location: 'Allée A-03',
      tag: { label: 'Qte modifiée', severity: 'secondary' },
      checked: true,
    },
  ];

  checkedStates = signal([false, false, true, true]);

  tabs: Tab[] = [
    { label: 'Préparation totale', value: 'total' },
    { label: 'En cours', value: 'en-cours' },
  ];
  activeTab = signal('total');

  locationOptions = ['Allée A-03 (4)', 'Allée A-02', 'Allée C-24', 'Hall 19'];
  selectedLocation = signal('Allée A-03 (4)');

  tags = [
    { label: 'Modifiée', severity: 'secondary' as const },
    { label: 'En cours', severity: 'info' as const },
    { label: 'Réglée', severity: 'success' as const },
    { label: 'Non réglée', severity: 'danger' as const },
  ];

  updateChecked(i: number, val: boolean) {
    const arr = [...this.checkedStates()];
    arr[i] = val;
    this.checkedStates.set(arr);
  }
}
