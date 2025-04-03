import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
    this.end=this.getEnd();
  }
  isExist=false;
  title = 'pagination';
  currentPage=0;
  start=0;
  end=0;
  pageSize=5;
  images=[
    {
      title:'at the beach',
      url:'https://th.bing.com/th/id/OIP.vtXin2cnC-ClY210S0C6kwHaEK?rs=1&pid=ImgDetMain',
    },
    {
      title:'at the beach south carolina',
      url:'https://th.bing.com/th/id/OIP.8xSml5psLHaDxyHayn0zYwHaE7?rs=1&pid=ImgDetMain',
    }, {
      title:'at the tanning',
      url:'https://thumbs.dreamstime.com/b/popular-perissa-beach-santorini-island-black-volcanic-sand-near-rock-mesa-vouno-perissa-santorini-greece-popular-perissa-350649691.jpg?w=768',
    },
    {
      title:'at the beach 2',
      url:'https://th.bing.com/th/id/OIP.vtXin2cnC-ClY210S0C6kwHaEK?rs=1&pid=ImgDetMain',
    },
    {
      title:'at the beach south carolina 2',
      url:'https://th.bing.com/th/id/OIP.8xSml5psLHaDxyHayn0zYwHaE7?rs=1&pid=ImgDetMain',
    }, {
      title:'at the tanning 2',
      url:'https://thumbs.dreamstime.com/b/popular-perissa-beach-santorini-island-black-volcanic-sand-near-rock-mesa-vouno-perissa-santorini-greece-popular-perissa-350649691.jpg?w=768',
    },
    {
      title:'at the beach 3',
      url:'https://th.bing.com/th/id/OIP.vtXin2cnC-ClY210S0C6kwHaEK?rs=1&pid=ImgDetMain',
    },
    {
      title:'at the beach south carolina 3',
      url:'https://th.bing.com/th/id/OIP.8xSml5psLHaDxyHayn0zYwHaE7?rs=1&pid=ImgDetMain',
    }, {
      title:'at the tanning 3',
      url:'https://thumbs.dreamstime.com/b/popular-perissa-beach-santorini-island-black-volcanic-sand-near-rock-mesa-vouno-perissa-santorini-greece-popular-perissa-350649691.jpg?w=768',
    },
    {
      title:'at the beach 4',
      url:'https://th.bing.com/th/id/OIP.vtXin2cnC-ClY210S0C6kwHaEK?rs=1&pid=ImgDetMain',
    },
    {
      title:'at the beach south carolina 4',
      url:'https://th.bing.com/th/id/OIP.8xSml5psLHaDxyHayn0zYwHaE7?rs=1&pid=ImgDetMain',
    }, {
      title:'at the tanning 4',
      url:'https://thumbs.dreamstime.com/b/popular-perissa-beach-santorini-island-black-volcanic-sand-near-rock-mesa-vouno-perissa-santorini-greece-popular-perissa-350649691.jpg?w=768',
    },
    {
      title:'at the beach 5',
      url:'https://th.bing.com/th/id/OIP.vtXin2cnC-ClY210S0C6kwHaEK?rs=1&pid=ImgDetMain',
    },
    {
      title:'at the beach south carolina 5',
      url:'https://th.bing.com/th/id/OIP.8xSml5psLHaDxyHayn0zYwHaE7?rs=1&pid=ImgDetMain',
    }, {
      title:'at the tanning 5',
      url:'https://thumbs.dreamstime.com/b/popular-perissa-beach-santorini-island-black-volcanic-sand-near-rock-mesa-vouno-perissa-santorini-greece-popular-perissa-350649691.jpg?w=768',
    }

  ]
  setActiveClass(index:number){
    return (index==this.currentPage)?'active':'';
  }
  checkwindowsIndex(index: number):boolean{
    if(index<this.start||index>this.end)
      return false;
    return true;
    //return Math.abs( this.currentPage-index)<5;
  }
  onClick(i:number){
    this.currentPage=i;
  }
  onBackClick(){
   if(this.currentPage>4)
   {
    if(this.images?.length>4)
    {
      this.end=this.end-1;
      this.start= this.start-1;
    }
 
   }
if(this.currentPage>0)
  this.currentPage--;
    
  }
  onNextClick(){
    if(this.currentPage==this.end)
      {
       if(this.images?.length>this.end)
       {
        this.end=this.end+1;
        this.start= this.start+1;
      
       }
        
      }
      this.currentPage++;
  }
   getEnd():number {
    if(this.images?.length>5)
      return 4;
    else
     return this.images.length
  }
}


