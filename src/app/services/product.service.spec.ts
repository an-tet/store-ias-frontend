import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { of } from 'rxjs';
import { Product } from '../models/Product.model';
import { products } from '../mock/get-all-products.mock';

fdescribe('ProductService', () => {
  let productService: ProductService;
  let httpTestingController: HttpTestingController;

  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    productService = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  it('should get all products', (done: DoneFn) => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of(products));
    productService = new ProductService(httpClientSpy);
    productService.getProducts().subscribe((productsResponse: Product[]) => {
      expect(productsResponse).toEqual(products);
      done();
    });
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
