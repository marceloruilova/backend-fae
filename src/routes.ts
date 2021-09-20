import {UserController} from "./controller/UserController";
import {HceController} from "./controller/HceController";
import {VitalController} from "./controller/VitalController";
import {EvolutionController} from "./controller/EvolutionController";

export const Routes = [
//Users routes    
{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
},{
    method: "get",
    route: "/users/date",
    controller: UserController,
    action: "bydate"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
//Hce routes    
{
    method: "get",
    route: "/hces",
    controller: HceController,
    action: "all"
}, {
    method: "get",
    route: "/hces/:id",
    controller: HceController,
    action: "one"
}, {
    method: "post",
    route: "/hces",
    controller: HceController,
    action: "save"
}, {
    method: "delete",
    route: "/hces/:id",
    controller: HceController,
    action: "remove"
}, //save vital, create hce
{
    method: "post",
    route: "/hces/:id",
    controller: HceController,
    action: "remove"
},
//Vital routes    
{
    method: "get",
    route: "/vitals",
    controller: VitalController,
    action: "all"
}, {
    method: "get",
    route: "/vitals/:id",
    controller: VitalController,
    action: "one"
}, {
    method: "post",
    route: "/vitals",
    controller: VitalController,
    action: "save"
}, {
    method: "delete",
    route: "/vitals/:id",
    controller: VitalController,
    action: "remove"
},
//Evolution routes    
{
    method: "get",
    route: "/evolutions",
    controller: EvolutionController,
    action: "all"
}, {
    method: "get",
    route: "/evolutions/:id",
    controller: EvolutionController,
    action: "one"
}, {
    method: "post",
    route: "/hcevolutionse",
    controller: EvolutionController,
    action: "save"
}, {
    method: "delete",
    route: "/evolutions/:id",
    controller: EvolutionController,
    action: "remove"
}
];