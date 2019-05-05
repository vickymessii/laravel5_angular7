import { Component, OnInit } from '@angular/core';
import Business from '../Business';
import { BusinessService } from '../business.service';
@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {
  businesses: Business[];
  constructor(private bs: BusinessService) { }
  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }
  ngOnInit() {
    this.bs
    .getBusinesses()
    .subscribe((data: Business[]) => {
      console.log(data.data);
      if(data.success==true)
      {
        this.businesses = data.data;
      }

  });
  }

}