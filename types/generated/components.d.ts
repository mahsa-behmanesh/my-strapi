import type { Schema, Struct } from '@strapi/strapi';

export interface CatsCats extends Struct.ComponentSchema {
  collectionName: 'components_cats_cats';
  info: {
    displayName: 'cats';
    icon: 'heart';
  };
  attributes: {
    cat: Schema.Attribute.String;
  };
}

export interface TestComponentTestComponents extends Struct.ComponentSchema {
  collectionName: 'components_test_component_test_components';
  info: {
    displayName: 'Test Components';
    icon: 'alien';
  };
  attributes: {
    desc: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cats.cats': CatsCats;
      'test-component.test-components': TestComponentTestComponents;
    }
  }
}
