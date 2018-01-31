import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/toPromise";
import { environment } from "../../../environments/environment";

@Injectable()
export class ApiService {
    saldo: Number = 0

    constructor(
        private http: HttpClient
    ){}
    
    header = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    private api_url = environment.url_api;

    get(route){
        return this.http.get(`${this.api_url}/${route}`).toPromise();
    }

    post(route, object){
        return this.http.post(`${this.api_url}/${route}`, object, {headers: this.header});
    }
    update(route, object){
        return this.http.put(`${this.api_url}/${route}`, object).toPromise();
    }
    delete(route, object){
        return this.http.delete(`${this.api_url}/${route}`, object).toPromise();
    }
}