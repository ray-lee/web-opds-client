import * as React from "react";
import * as PropTypes from "prop-types";
import { ReactReduxContext } from 'react-redux';
import Root from "./Root";
import { State } from "../state";
import AuthPlugin from "../AuthPlugin";
import OPDSStore from './context/OPDSStore'

export interface OPDSCatalogProps {
  collectionUrl?: string;
  bookUrl?: string;
  authPlugins?: AuthPlugin[];
  pageTitleTemplate?: (collectionTitle: string, bookTitle: string) => string;
  proxyUrl?: string;
  initialState?: State;
  epubReaderUrlTemplate?: (epubUrl: string) => string;
}

/**
 * The main application component.
 *  - Renders root and passes props along with store to root
 *  - Creates the redux store using OPDSStore
 *  - Passes the redux store down the tree in context
 */
const OPDSCatalog: React.FunctionComponent<OPDSCatalogProps> = (props) => {

  return (
    <OPDSStore initialState={props.initialState} authPlugins={props.authPlugins}>
      <RootWrapper {...props} />
    </OPDSStore>
  );
};

/**
 * Simple wrapper to allow context to become available before we get it.
 */
const RootWrapper: React.FunctionComponent<OPDSCatalogProps> = (props) => {
  const {store} = React.useContext(ReactReduxContext);
  return (
    <Root store={store} {...props} />
  );
};

export default OPDSCatalog