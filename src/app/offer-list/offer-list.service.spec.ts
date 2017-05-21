import {TestBed, inject} from "@angular/core/testing";
import {OfferListService} from "./offer-list.service";

describe('OfferListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfferListService]
    });
  });

  it('should ...', inject([OfferListService], (service: OfferListService) => {
    expect(service).toBeTruthy();
  }));
});
