#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

// ─── STACK ───────────────────────────────────────────
Node* top = nullptr;

void push(int val) {
    Node* n = new Node();
    n->data = val;
    n->next = top;
    top = n;
    cout << "[Stack] Pushed: " << val << "\n";
}

void pop() {
    if (!top) { cout << "[Stack] Empty!\n"; return; }
    cout << "[Stack] Popped: " << top->data << "\n";
    Node* temp = top;
    top = top->next;
    delete temp;
}

void showStack() {
    cout << "[Stack] Top -> ";
    Node* curr = top;
    while (curr) { cout << curr->data << " -> "; curr = curr->next; }
    cout << "NULL\n";
}

// ─── LINKED LIST ─────────────────────────────────────
Node* head = nullptr;

void insertFront(int val) {
    Node* n = new Node();
    n->data = val;
    n->next = head;
    head = n;
    cout << "[List] Inserted at front: " << val << "\n";
}

void insertEnd(int val) {
    Node* n = new Node();
    n->data = val;
    n->next = nullptr;
    if (!head) { head = n; }
    else {
        Node* curr = head;
        while (curr->next) curr = curr->next;
        curr->next = n;
    }
    cout << "[List] Inserted at end: " << val << "\n";
}

void deleteNode(int val) {
    if (!head) { cout << "[List] Empty!\n"; return; }
    if (head->data == val) {
        Node* temp = head;
        head = head->next;
        delete temp;
        cout << "[List] Deleted: " << val << "\n";
        return;
    }
    Node* curr = head;
    while (curr->next && curr->next->data != val) curr = curr->next;
    if (!curr->next) { cout << "[List] Not found: " << val << "\n"; return; }
    Node* temp = curr->next;
    curr->next = temp->next;
    delete temp;
    cout << "[List] Deleted: " << val << "\n";
}

void showList() {
    cout << "[List] Head -> ";
    Node* curr = head;
    while (curr) { cout << curr->data << " -> "; curr = curr->next; }
    cout << "NULL\n";
}

// ─── MAIN ────────────────────────────────────────────
int main() {
    cout << "===== STACK =====\n";
    push(10);
    push(20);
    push(30);
    showStack();
    pop();
    showStack();

    cout << "\n===== LINKED LIST =====\n";
    insertEnd(1);
    insertEnd(2);
    insertEnd(3);
    insertFront(0);
    showList();
    deleteNode(2);
    showList();

    return 0;
}
