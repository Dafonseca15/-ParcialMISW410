import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
// import * as faker from 'faker';

import { ListarCafeComponent } from './listar-cafe.component';
import { CafeService } from '../../service/cafe.service';
import { Cafe } from '../../models/cafe';

describe('ListarCafeComponent', () => {
  let component: ListarCafeComponent;
  let fixture: ComponentFixture<ListarCafeComponent>;
  let cafeService: jasmine.SpyObj<CafeService>;

  const dummyCafes: Cafe[] = [
    { id: 1, nombre: 'Cafe 1', tipo: 'Tipo 1', region: 'Region 1', sabor: 'Sabor 1', altura: 1000, imagen: 'https://example.com/image1.jpg' },
    { id: 2, nombre: 'Cafe 2', tipo: 'Tipo 2', region: 'Region 2', sabor: 'Sabor 2', altura: 2000, imagen: 'https://example.com/image2.jpg' },
    { id: 3, nombre: 'Cafe 3', tipo: 'Tipo 3', region: 'Region 3', sabor: 'Sabor 3', altura: 3000, imagen: 'https://example.com/image3.jpg' }
  ];

  beforeEach(async () => {
    const cafeServiceSpy = jasmine.createSpyObj('CafeService', ['getAllCafes']);
  
    await TestBed.configureTestingModule({
      imports: [ListarCafeComponent],
      providers: [{ provide: CafeService, useValue: cafeServiceSpy }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarCafeComponent);
    component = fixture.componentInstance;
    cafeService = TestBed.inject(CafeService) as jasmine.SpyObj<CafeService>;
  });

  it('Create', () => {
    expect(component).toBeTruthy();
  });

  it('Call getAllCafes on init', () => {
    cafeService.getAllCafes.and.returnValue(of(dummyCafes));
    fixture.detectChanges(); // triggers ngOnInit
    expect(cafeService.getAllCafes).toHaveBeenCalled();
  });

  it('Set cafes property with the items returned from the server', () => {
    cafeService.getAllCafes.and.returnValue(of(dummyCafes));
    fixture.detectChanges(); // triggers ngOnInit
    expect(component.cafes).toEqual(dummyCafes);
  });

  it('Create a table with 3 rows and a header', () => {
    cafeService.getAllCafes.and.returnValue(of(dummyCafes));
    fixture.detectChanges(); // triggers ngOnInit

    const rows = fixture.debugElement.queryAll(By.css('tr'));
    expect(rows.length).toBe(4); // 3 rows for data plus 1 for the header
  });
});