import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CssBaseline from "@material-ui/core/CssBaseline";

// @ts-ignore
// __webpack_public_path__ is used to set the public path for the js files - https://webpack.js.org/guides/public-path/
declare var __webpack_public_path__: string;
__webpack_public_path__ = `${document.baseURI!}build/`;

const routes = {
    'mainpage': React.lazy(() => import(/* webpackChunkName: "mainpage" */'./pages/Main')),
};

const view = document.getElementById('reactView') as HTMLElement;
const root = document.getElementById('root') as HTMLElement;

const App = (): JSX.Element => {
    const Page = routes[view.getAttribute('content')!];
    return (
        <React.Suspense fallback={<div>loading</div>}>
            <CssBaseline />
            <Page />
        </React.Suspense>
    );
};


ReactDOM.render(<App />, root);




