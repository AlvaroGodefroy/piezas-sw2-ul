import * as express from "express";

export const register = ( app: express.Application ) => {
    const oidc = app.locals.oidc;

    app.get( "/", ( req: any, res ) => {
        res.render( "index" );
    } );

    app.get( "/login", ( req: any, res ) => {
        res.redirect( "/guitars" );
    } );

    app.get( "/logout", ( req: any, res ) => {
        req.logout();
        res.redirect( "/" );
    } );

    app.get( "/registro", ( req: any, res ) => {
        res.render( "registro" );
    } );
};