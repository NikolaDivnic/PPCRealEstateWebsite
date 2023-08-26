import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service'; // replace with the actual path to your service
import { supabase } from '../services/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-real-estate-list',
  templateUrl: './real-estate-list.component.html',
  styleUrls: ['./real-estate-list.component.css']
})
export class RealEstateListComponent implements OnInit {
  filters: any;
  estates: any[] = [];
  currentPage = 1;
  totalPages = 1;
  pageSize = 10;

  constructor(private filterService: FilterService, private router: Router) { }

  ngOnInit() {
    this.filterService.currentFilters.subscribe(filters => {
      this.filters = filters;
      this.fetchRealEstateData(this.currentPage);
    });
  }

  async fetchRealEstateData(page: number) {
    let query = supabase
      .from('RealEstateAds') // replace with your table name
      .select('*', { count: 'exact' }) // get the total count of rows
      .gte('price', this.filters.priceFrom || 0)
      .lte('price', this.filters.priceTo || 999999999)
      .gte('size', this.filters.sizeFrom || 0)
      .lte('size', this.filters.sizeTo || 999999999)
      .gte('pricePerSquareMeter', this.filters.pricePerSqmFrom || 0)
      .lte('pricePerSquareMeter', this.filters.pricePerSqmTo || 999999999)
      .gte('numberOfRooms', this.filters.roomsFrom || 0)
      .lte('numberOfRooms', this.filters.roomsTo || 999999999)
      .gte('floor', this.filters.floorFrom || 0)
      .lte('floor', this.filters.floorTo || 999999999)
      .ilike('location', `%${this.filters.location || ''}%`);

    // If the user is on the 'user-ads' page, add a condition to the query to only fetch the user's ads
    if (this.router.url === '/user-ads') {
      const session = supabase.auth.getUser();

      if (session && (await session).data.user) {
        query = query.eq('agencyID', (await session).data.user?.id); // replace 'userId' with the actual column name in your table
      }
    }

    let { data, error, count } = await query
      .range((page - 1) * this.pageSize, page * this.pageSize - 1);

    if (count != null) {
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        if(data == null) {
          this.estates = [];
        }
        else{
          this.estates = data;
        }
        this.totalPages = Math.ceil(count / this.pageSize);
        this.currentPage = page; // Update the currentPage variable
      }
    }
    else{
      console.error('Count is null', error);
    }  
  }
}
