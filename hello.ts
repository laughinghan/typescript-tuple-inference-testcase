declare function MyOrderedMap<K, V>(collection: Iterable<[K, V]>): MyOrderedMap<K, V>;
declare interface MyOrderedMap<K, V> extends Map<K, V> {
  readonly size: number;
}

let x = MyOrderedMap([[1, 'a']]);
