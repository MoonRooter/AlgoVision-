#include <iostream>
using namespace std;

// stack.cpp — Arihant Rawat (DB / Testing)

struct Node {
    int data;
    Node* next;
};

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

int main() {
    cout << "===== STACK =====\n";
    push(10);
    push(20);
    push(30);
    showStack();
    pop();
    showStack();
    return 0;
}
