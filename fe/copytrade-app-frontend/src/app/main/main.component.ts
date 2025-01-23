import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  selectedFile: File | null = null;
  orders: any[] = [];
  displayedColumns: string[] = ['reqId', 'Trading_Symbol', 'Exchange', 'Action', 'Quantity'];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.fetchOrders();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(event: Event) {
    event.preventDefault();
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.orderService.uploadOrders(formData).subscribe(response => {
        console.log('Orders uploaded:', response);
        this.fetchOrders();
      });
    }
  }

  fetchOrders() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }
}
