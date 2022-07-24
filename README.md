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
    key-value pair 的資料結構(類似JS的Object)，適用於查詢與刪除
        Insert： O(1)：若要插入的 bucket 已有值，用 LinkList or Array 的方式串連
        Lookup: O(1)：若有 collision 發生，lookup 的時間複雜度就可能會變成 O(n)
        Delete: O(1)：透過 hash function 直接找出該 key 對應的 value
        Search: O(1)：同上

####  BinarySearchTree
    二元搜尋數，以第一個 root 為節點，
    比 root 小的在左邊，比 root 大的在右邊，
    每個節點下方只會有兩個節點(left and right)
        搜尋與插入方法的時間複雜度為 O(log n)，
        空間複雜度為 O(1)；
