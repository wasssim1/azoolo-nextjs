export function categoriesIndexer(categKey) {
  return CATEGORIES_LIST[categKey]?.value || categKey
}

export const CATEGORIES_LIST = {
  mode: {
    key: 'clothing',
    value: 'Vêtements',
    parent: 'women',
  },
  femme: {
    key: 'women',
    value: 'Femme',
  },
  homme: {
    key: 'men',
    value: 'Homme',
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
