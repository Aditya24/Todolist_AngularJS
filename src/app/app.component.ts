import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

//import { from } from 'rxjs';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  get appTitle(): string {
    return this.title.getTitle();
  }

  constructor(private title: Title, private header: Title) {
    title.setTitle("Unfinished Todo App");
  }
}
