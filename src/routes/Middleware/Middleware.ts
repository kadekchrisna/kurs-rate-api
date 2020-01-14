export class Middleware {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    printName(req: any, res: any, next: any): any {
        // eslint-disable-next-line no-console
        console.log(`name: ${req.body.name}`);
        next();
    }
}