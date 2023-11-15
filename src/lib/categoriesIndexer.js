export function categoriesIndexer(categKey) {
  return CATEGORIES_LIST[categKey]?.value || categKey
}

export const CATEGORIES_LIST = {
  mode: {
    key: 'mode',
    value: 'Mode',
    parent: null,
  },
  femme: {
    key: 'femme',
    value: 'Femme',
    parent: 'mode',
  },
  homme: {
    key: 'homme',
    value: 'Homme',
    parent: 'mode',
  },
  'enfant-bebe': {
    key: 'enfant-bebe',
    value: 'Enfant & Bébé',
    parent: 'mode',
  },
  accessoires: {
    key: 'accessoires',
    value: 'Accessoires',
    parent: 'mode',
  },
  'robes-jupe': 'Robes & Jupes',
  'beaute-bienetre': 'Beauté & Bien-être',
  beaute: 'Beauté',
  'sport-loisirs': 'Sport & Loisirs',
  'sport-camping': 'Sport & Camping',
  vetements: 'Vêtements',
}
