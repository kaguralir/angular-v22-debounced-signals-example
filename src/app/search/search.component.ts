import { Component, signal, debounced, inject, resource } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { switchMap, debounceTime, distinctUntilChanged, map, startWith, catchError, of, firstValueFrom } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: number;
  title: string;
  price: number;
}

@Component({
  selector: 'app-search',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {

  // Example 1. RXJS debounceTime
  private http = inject(HttpClient);
  protected readonly query = signal('');
  // private readonly $query = toObservable(this.query);
  // protected readonly products = toSignal(
  //   this.$query.pipe(
  //     // debounceTime(1000),
  //     distinctUntilChanged(),
  //     switchMap(query =>
  //       query
  //         ? this.http.get<{ products: Product[] }>(
  //             `https://dummyjson.com/products/search?q=${query}&limit=10`
  //           ).pipe(
  //             map(res => ({ status: 'data' as const, data: res.products })),
  //             startWith({ status: 'loading' as const, data: [] as Product[] }),
  //             catchError(() => of({ status: 'error' as const, data: [] as Product[] })),
  //           )
  //         : of({ status: 'idle' as const, data: [] as Product[] }),
  //     ),
  //   ),
  //   { initialValue: { status: 'idle' as const, data: [] as Product[] } },
  // );

  // Example 2. Debounced Signal
  protected readonly debouncedQuery = debounced(this.query, 1000);

  protected readonly products = resource({
    params: () => this.debouncedQuery.value() || undefined,
    loader: ({ params }) => 
      firstValueFrom(
        this.http.get<{ products: Product[] }>(
          `https://dummyjson.com/products/search?q=${params}&limit=10`
        )
      ).then(res => res.products),
  });
}
