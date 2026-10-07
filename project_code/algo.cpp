
#include <iostream>
using namespace std;
struct Node {
    int data;
    Node* next;
};
Node* top = nullptr;
void push(int val) {
    Node* newNode = new Node();
    newNode->data = val;
    newNode->next = top;
    top = newNode;
    cout << val << " pushed\n";
}
void pop() {
    if (top == nullptr) {
        cout << "Stack is empty\n";
        return;
    }
    cout << top->data << " popped\n";
    Node* temp = top;
    top = top->next;
    delete temp;
}
void display() {
    Node* curr = top;
    cout << "Stack: ";
    while (curr != nullptr) {
        cout << curr->data << " ";
        curr = curr->next;
    }
    cout << "\n";
}
int main() {
    push(10);
    push(20);
    push(30);
    display();
    pop();
    display();
    return 0;
}