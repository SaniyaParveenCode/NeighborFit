#include <iostream>
#include <vector>
#include <set>
#include <map>
using namespace std;

vector<int> parent, rank_;
map<int, set<int>> componentMap;
map<int, int> componentBeauty;

int find(int x) {
    if (parent[x] != x) {
        parent[x] = find(parent[x]);
    }
    return parent[x];
}

int union_sets(int x, int y) {
    if (rank_[x] < rank_[y]) {
        parent[x] = y;
        return y;
    } else if (rank_[x] > rank_[y]) {
        parent[y] = x;
        return x;
    } else {
        parent[x] = y;
        rank_[y]++;
        return y;
    }
}

int main() {
    int n, q;
    cin >> n >> q;

    parent.resize(n + 1);
    rank_.resize(n + 1, 0);

    for (int i = 1; i <= n; i++) {
        parent[i] = i;
        set<int> s;
        s.insert(i);
        componentMap[i] = s;
        componentBeauty[i] = 1;
    }

    int totalBeauty = 0;

    for (int i = 0; i < q; i++) {
        int type, u, v;
        cin >> type >> u >> v;

        if (type == 1) {
            int ru = find(u);
            int rv = find(v);

            if (ru != rv) {
                int newRoot = union_sets(ru, rv);
                int oldRoot = (newRoot == ru) ? rv : ru;

                set<int>& setNew = componentMap[newRoot];
                set<int>& setOld = componentMap[oldRoot];
                int beauty = componentBeauty[newRoot];

                for (int node : setOld) {
                    bool hasLeft = setNew.count(node - 1);
                    bool hasRight = setNew.count(node + 1);

                    if (hasLeft && hasRight) {
                        beauty--; // merged two segments
                    } else if (!hasLeft && !hasRight) {
                        beauty++; // new segment
                    }
                    // else unchanged
                    setNew.insert(node);
                }

                componentMap.erase(oldRoot);
                componentBeauty[newRoot] = beauty;
                componentBeauty.erase(oldRoot);
            }
        } else if (type == 2) {
            int root = find(u);
            totalBeauty += componentBeauty[root];
        }
    }

    cout << totalBeauty << endl;
    return 0;
}
