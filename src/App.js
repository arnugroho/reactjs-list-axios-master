import React, {Suspense, lazy, Fragment} from 'react';
import Loader from "react-js-loader";

const Main = lazy(() => import('../src/Layout/Base'));

function App() {
    return (
            <Fragment>
                <div className="App">
                    <Suspense fallback={
                        <div className="loader-container">
                            <div className="loader-container-inner">
                                <div className="text-center">
                                    <Loader type="semi-circle-spin"/>
                                </div>
                            </div>
                        </div>
                    }>
                        <Main/>
                    </Suspense>

                </div>
            </Fragment>
    );
}

export default App;