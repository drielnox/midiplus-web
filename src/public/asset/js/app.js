/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = {};

app.Todo = Backbone.Model.extend(
        {
            defaults:
                    {
                        title: '',
                        completed: false
                    }
        });
