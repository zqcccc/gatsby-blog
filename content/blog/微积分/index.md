---
title: 微积分
date: "2020-08-05"
description: "测试一下数学公式插件显示"
---

## 常用数学符号

$\sum 累加  \\\prod 累乘$
$$
\mathop{\arg\max}_{x∈D}\{f(x)\} 得到使函数最大的x\\
\mathop{\arg\min}_{x∈D}\{f(x)\} 得到使函数最小的x
$$
$\forall 对于任何的  \\\exists存在 \\\Rightarrow左边推出右边\\\Leftarrow右边推出左边\\\Leftrightarrow等价于$

领域：

U(a,δ)={x|a-δ<x<a+δ} 称为点a的δ领域，说白了就是某个点附近的区域

去心领域：

$U( \widetilde a,δ)=U( \widetilde a)=\{x|0<|x-a|<δ\}$

对于f(x)定义域就是x的取值范围吧

## 函数极限

设y=f(x)定义在$x_0$的取心领域里由定义，如果准在常数A，使得当$x\rightarrow x_0$时，函数f(x)向A无限靠近，则称y=f(x)在$x_0$处有极限，极限为A，记作
$$
{\lim_{x \to x_0}f(x)=A}
$$
唯一性定理：

1. $$
   若{\lim_{x \to x_0}f(x)}存在，则极限唯一
   $$

2. 函数极限与f(x)在$x_0$是否有定义无关

极限判断的方法：

从$x_0$的左侧(x<$x_0$)趋于$x_0$时函数的极限称为左极限
$$
f(x_0-0)={\lim_{x \to x_0^-}f(x)}
$$
从$x_0$的右侧(x>$x_0$)趋于$x_0$时函数的极限称为右极限
$$
f(x_0+0)={\lim_{x \to x_0^+}f(x)}
$$

$$
{\lim_{x \to x_0}f(x)}=A\Leftrightarrow{\lim_{x \to x_0^-}f(x)}={\lim_{x \to x_0^+}f(x)}=A
$$

f(x)在$x \rightarrow x_0$时极限存在

极限运算和普通的四则运算一样，幂运算也是一样的
$$
\lim{cf(x)}=c\lim{f(x)}
$$
复合运算
$$
y=sin2x \leftrightarrow y=sinu,u=2x\\
若u=g(x),\lim_{x \to x_0}g(x)=u_0\\
y=f(u),\lim_{u \to u_0}f(u)=A\\
\lim_{x \to x_0}f(g(x))=\lim_{u \to u_0}f(u)=A
$$

## 函数的连续性

设函数y=f(x)在$x_0$的某领域内有定义，且
$$
{\lim_{x \to x_0}f(x)=f(x_0)}
$$
则称函数f(x)在$x_0$连续

可见，函数f(x)在点$x_0$连续必须具备下列条件：

1. f(x)在点$x_0$有定义，即f($x_0$)存在

2. 极限存在

3. $$
   {\lim_{x \to x_0}f(x)=f(x_0)}
   $$

### 连续函数

若f(x)在某区间上每一点都连续，则称它在该区间上或称它为该区间上的**连续函数**

连续函数的性质：

最大最小值定理：如果函数f(x)在闭区间[a,b]上连续,则至少存在两点ζ,η∈[a,b],使得f(ξ)=max{f(x)},f(η)=min{f(x)}

有界性定理：在闭区间上连续的函数一定在该区间上有界

介值定理：

1.  f(x)在闭区间 [a,b] 上连续
2. 且 f(a) ≠ f(b)
3. 为介于 f(a)与 f(b)之间的任意一个数, 则至少存在一点ξ ∈ (a,b),使得 f(ξ)=C . 

函数f(x)在$x_0$连续则必有极限

函数f(x)在$x_0$存在极限则未必连续

## 导数的概念，几何意义

假设函数 y=f(x) 在点$x_0$的某邻域内有定义 ,若
$$
\lim_{x \to x_0}\frac{f(x)-f(x_0)}{x-x_0}
$$
存在，则称函数f(x)在点$x_0$处可导，并称此极限为y=f(x)在点$x_0$的导数。记作
$$
y'|_{x=x_0}\\
f'(x_0)\\
\frac{dy}{dx}|_{x=x_0}\\
\frac{df(x)}{dx}|_{x=x_0}\\
即 y'|_{x=x_0}=f'(x_0)=\lim_{\Delta x \to 0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=\lim_{h \to 0}\frac{f(x_0+h)-f(x_0)}{h}
$$
几何意义：

一元函数的导数就是过该点做切线的斜率$\rightarrow$函数值变化的幅度大小$\rightarrow$变化越大导数的绝对值就越大

## 导数计算

导数可导性：极限存在才可导

左右极限存在且相等才能说可导

如果函数在某个区间内处处连续的话，就称这个函数在这个区间内是连续的

如果函数在某个区间内处处可导的话，就称这个函数在这个区间内是可导的 

可导一定连续，连续不一定可导

**导数的四则计算法则**：

(u±v)'=u'±v'

(Cu)‘=Cu'，C 为常数

(uv)'=u'v+uv'

$(\frac{u}{v})'=\frac{u'v-uv'}{v^2}$

**复合函数运算法则（链式法则）**：

y=g(x), z=h(y)

$△x\rightarrow△y\rightarrow△z$

$\frac{dz}{dx}=\frac{dz}{dy}*\frac{dy}{dx}$

## 高阶导数

如果f(x)的导数f'(x)在$x_0$处可导，即
$$
f''(x_0)=[f'(x)]'|_{x=x_0}=\lim_{\Delta x \to 0}\frac{f'(x_0+\Delta x)-f'(x_0)}{\Delta x}
$$
存在，则称
$$
[f'(x)]'|_{x=x_0}
$$
为函数f(x)在$x_0$处的二阶导数，并称f(x)在x=$x_0$处二阶可导，记作
$$
f''(x_0),y''|_{x=x_0},\frac{d^2f(x)}{dx^2}|_{x=x_0}
$$
类似地，二阶导数的导数称为三阶导数，依次类推

二阶及二阶以上的导数统称为高阶导数

## 偏导和微分

f(x)的导数描述的是x变化一点点之后f(x)的变化程度的强弱

z=(x,y)在点($x_0$,$y_0$)的某领域内极限
$$
\lim_{\Delta x \to 0}\frac{f(x_0+\Delta x,y_0)-f(x_0,y_0)}{\Delta x}
$$
存在，则称此极限为函数z=f(x,y)在点($x_0$,$y_0$)对x的偏导数记为
$$
\frac{\partial f}{\partial x}|_{(x_0,y_0)} \qquad  Z_x|_{(x_0,y_0)} \qquad f_x(x_0,y_0) \qquad f_1'(x_0,y_0) \qquad \frac{\partial z}{\partial x}|_{(x_0,y_0)}
$$
同样可定义对 y 的偏导数
$$
f_y(x_0,y_0)=\lim_{\Delta y \to 0}\frac{f(x_0,y_0+\Delta y)-f(x_0,y_0)}{\Delta y}
$$
若函数 z = f ( x , y ) 在域 D 内每一点 ( x , y ) 处对 x或 y 偏导数存在 , 则该偏导数称为偏导函数,也简称为偏导数

导数有高阶导数，偏导也有高阶偏导

### 微分

不严格的说，微分可以看成导数后面乘个尾巴，这个尾巴就是细分的程度

函数可导和可微是一样的，但是函数的导数和微分是不一样的

设函数 y=f(x) 在 $x_0$ 的某领域 $(x_0-\delta,x_0+\delta)$ 内有定义，若存在与 $△x$ 无关的常数A，使函数 y=f(x) 在 $x_0$ 处的增量 $△y=f(x_0+△x)-f(x_0)$ 可以表示为
$$
\Delta y=f(x_0+\Delta x)-f(x_0)=A\Delta x+o(\Delta x)(\Delta x\rightarrow0)
$$
则称函数 y=f(x) 在 $x_0$ 处可微（或可微分），$A\Delta x$ 称为 y=f(x) 在 $x_0$ 处的微分，记为
$$
dy|_{x=x_0}或df(x)|_{x=x_0},即dy|_{x=x_0}=A\Delta x
$$
若是在一般点 x 处的微分，则简记 $dy=A\Delta x$

设函数 y=f(x) 在 $x_0$ 的某领域 $(x_0-\delta,x_0+\delta)$ 内有定义，则称函数 y=f(x) 在 $x_0$ 处可微的**充要条件**是 y=f(x) 在 $x_0$ 处可导，且 y=f(x) 在 $x_0$ 处的微分为
$$
dy|_{x=x_0}=f'(x_0)dx\ 或\ df(x)|_{x=x_0}=f'(x_0)dx
$$
一般地，若函数 y=f(x) 在某区间中的任意点 x 处可导，则 y=f(x) 在点 x 处的微分为
$$
dy=f'(x)dx\ 或\ df(x)=f'(x)dx
$$
由此得到导数是记为
$$
\frac{dy}{dx}=f'(x)\ 或\ \frac{df(x)}{dx}=f'(x)
$$
如果函数 y=f(x) 在 $x_0$ 处二阶可导，则函数 y=f(x) 在 $x_0$ 处二阶微分记为：
$$
d^2y|_{x=x_0}=f''(x_0)dx^2\ 这里dx^2本来是(dx)^2，括号省略了
$$
如果 y=f(x) 在 $x_0$ 处具有 n 阶导数，类似有 n 阶微分公式：
$$
d^ny=f^{(n)}(x)dx^n
$$


## 不定积分

微分本质上就是算函数f的导数，我们想要知道是什么样的一个函数求完导数之后是函数f

微分积分互逆运算

如果函数f(x)在区间I上连续，则f(x)在I上存在原函数

### 分部积分法

设u=u(x),v=v(x)具有连续导数，则有分部积分公式
$$
\int udv=uv-\int vdu
$$
来源：

因为(uv)'=u'v+uv'
$$
\int uv'dx=\int (uv)'dx-\int u'vdx\\
\int uv'dx=uv-\int u'vdx\\
\int udv=uv-\int vdu
$$
例题

![分部积分例题](https://i.loli.net/2019/08/13/bcOto5lBg28u7pw.jpg)

这里有两次分部积分

## 定积分

牛顿莱布尼兹公式

设f(x)在[a,b]上连续，F(x)是f(x)的一个原函数，则
$$
\int_a^bf(x)dx=F(b)-F(a)
$$
算出不定积分，然后把b和a带进去相减就是我们要算的定积分

### 换元积分法

先用不定积分的换元法算出不定积分然后用莱布尼兹公式算出定积分

### 分部积分法

设u(x),v(x)在区间[a,b]上具有连续导数，则有
$$
\int_a^budv=[uv]_a^b-\int_a^bvdu
$$

$$

$$

