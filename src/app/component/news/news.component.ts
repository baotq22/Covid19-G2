import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface News {
  url: string;
  date: string;
  summary: string;
  name: string;
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  constructor() {}
  news: News[] = [
    {
      url: 'https://lh3.googleusercontent.com/proxy/hThS599jQ5PGFdVtMaKZOCfhowlVNoyZdOUNEIwp4cc2Wiiye_XS1p-_4vq81KUd7O2jQpuF9TlZiohnagvbAMZ4ByxHwXLsaxbFK-P2xs5zd9zA3fZuOx0pzVyiNIxJaDMb4reO09GDPPtziZ3FdEJC9FfYcKGeZeU',
      date: '2h a go',
      summary:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual',
      name: 'covid19 1914 translation by H. Rackham',
    },
    {
      url: 'https://media-cdn.laodong.vn/storage/newsportal/2021/8/8/939664/Covid-19.jpg?w=414&h=276&crop=auto&scale=both',
      date: '7/8/2021',
      summary:
        'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure ghgjg dgft',
      name: 'covid19 written by Cicero in 45 BC',
    },
    {
      url: 'https://file1.dangcongsan.vn/data/0/images/2021/02/22/lantttts/vna-potal-covid-19-thu-do-bac-kinh-ghi-nhan-truong-hop-dau-tien-nhiem-bien-the-duoc-phat-hien-tai-anh-5244634.jpg?dpi=150&quality=100&w=680',
      date: '6/8/2021',
      summary:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate',
      name: 'covid19 1914 translation by H. Rackham',
    },
    {
      url: 'https://ichef.bbci.co.uk/live-experience/cps/1024/cpsprodpb/10F3C/production/_116863496_10viruscloseup2.jpg',
      date: '5/8/2021',
      summary:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
      name: 'covid19 1914 translation by H. Rackham',
    },
    {
      url: 'https://cdnmedia.baotintuc.vn/Upload/EqV5H9rWgvy9oNikwkHLXA/files/2021/COVID-19/27072021-COVID-19-tiem-vaccine-1.jpg',
      date: '5/8/2021',
      summary:
        'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,',
      name: 'covid19 1914 we denounce with righteous indignation',
    },
    {
      url: 'https://img.nhandan.com.vn/Files/Images/2020/12/06/90876557_10213242042484909_60481-1607253274520.jpg',
      date: '4/8/2021',
      summary:
        'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble tha',
      name: 'we denounce with righteous dislike covid19 1914 ',
    },
    {
      url: 'http://image.congan.com.vn/thumbnail/CATP-480-2021-8-3/tphcm-ra-mat-cong-thong-tin-covid-19-tich-hop-nhieu-thong-tin-huu-ich_757_454_792.png',
      date: '4/8/2021',
      summary:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual',
      name: 'covid19 1914 translation by H. Rackham',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfaaOTMTRRgK_rgc_lzFv3jnePgXpkYn7bA&usqp=CAU',
      date: '3/8/2021',
      summary:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual',
      name: 'covid19 1914 translation by H. Rackham',
    },
  ];

  ngOnInit(): void {}
}
