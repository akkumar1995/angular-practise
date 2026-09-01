import { Component, resource, signal } from "@angular/core";

@Component({
 selector: 'app-user-resource',
 template: ``,
})
export class UserResource {
    userId = signal(1);
    userResource = resource({
        params: () => ({id:this.userId()}),
        loader: ({params,abortSignal}) => {
            return fetch(`/api/users/${params.id}`, { signal: abortSignal }).then(res => res.json());
        }
    });
    
    reload = this.userResource.reload();
}