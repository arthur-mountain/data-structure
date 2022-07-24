# data-structures
Implement data structures in a programming language I know.

---
####  Queue
    First In First Out. 先進先出

####  Stack
    First In Last Out. 後進先出

####  LinkList
    singly 單向串列，每個節點只會連接【下一個節點】
    doubly 雙向串列，每個節點會連接【下一個節點】和【上一個節點】

####  HashTable
    key-value pair 的資料結構，適用於查詢與刪除
        Insert： O(1)：若要插入的 bucket 已有值，用 LinkList or Array 的方式串連
        Lookup: O(1)：若有 collision 發生，lookup 的時間複雜度就可能會變成 O(n)
        Delete: O(1)：透過 hash function 直接找出該 key 對應的 value
        Search: O(1)：同上
