import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FormateurTableDataSource } from './formateur-table-datasource';

@Component({
  selector: 'app-formateur-table',
  templateUrl: './formateur-table.component.html',
  styleUrls: ['./formateur-table.component.css']
})
export class FormateurTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: FormateurTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new FormateurTableDataSource(this.paginator, this.sort);
  }
}
