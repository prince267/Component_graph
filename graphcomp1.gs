mat.x=fun3.(c1.(fun.x.(length.x)))

fun.x.y=[fun2.(x!!s).1.(s+1)|s<-[0...(y-1)]]

fun2.[].n.r=[]
fun2.(x::xs).n.r
	|x==1=[r,n]++fun2.xs.(n+1).r
	|otherwise=[r]++fun2.xs.(n+1).r

f.[].y=[]
f.(x::xs).y
	|elem.x.y=True::f.xs.y
	|otherwise=f.xs.y

fun3.(x::xs)=[rm.s|s<-(x::xs)]

rm.[]=[]
rm.(x::xs)=[x]++rm.[y|y<-(x::xs),not.(x==y)]

c1.[]=[]
c1.(x::xs)=c2.x.(x::xs).(x::xs)

c2.x.[].[z]=[z]
c2.x.[].(z::zs)=z::(c2.(zs!!0).zs.zs)
c2.x.(y::ys).(z::zs)
	|or.(f.x.y)=c2.(x++y).ys.((::).(x++y).[s|s<-(zs),not.(s==y)])
	|otherwise=c2.x.ys.(z::zs)




