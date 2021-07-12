l = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1]

print([i for i in l if i] + [0]* l.count(0))


def foo(x:str)->int:
    return 42


print(foo(2))
