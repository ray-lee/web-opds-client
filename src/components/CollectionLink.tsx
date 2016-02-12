import * as React from "react";
import Link from "./Link";

export default class CollectionLink extends Link<CollectionLinkProps> {
  processClick() {
    this.props.fetchCollection(this.props.url);
  }

  href() {
    return "?collection=" + encodeURIComponent(this.props.url);
  }
}