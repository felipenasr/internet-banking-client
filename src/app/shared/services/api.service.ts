import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { environment } from "../../../environments/environment";

@Injectable()
export class ApiService {
    constructor(
        private http: Http
    ){}
    private api_url = environment.url_api;

    get(route){
        return this.http.get(`${this.api_url}/${route}`).toPromise();
    }

    post(route, object){
        return this.http.post(`${this.api_url}/${route}`, object).toPromise();
    }
    update(route, object){
        return this.http.put(`${this.api_url}/${route}`, object).toPromise();
    }
    delete(route, object){
        return this.http.delete(`${this.api_url}/${route}`, object).toPromise();
    }
}