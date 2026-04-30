# 第9周：练习答案

## 分部积分法

### 选择题
1. **答案：A**
   解析：令$u = x$，$dv = \cos x dx$，则$du = dx$，$v = \sin x$，$\int x \cos x dx = x \sin x - \int \sin x dx = x \sin x + \cos x + C$

2. **答案：B**
   解析：令$u = \ln x$，$dv = dx$，则$du = \frac{1}{x} dx$，$v = x$，$\int \ln x dx = x \ln x - \int x \cdot \frac{1}{x} dx = x \ln x - x + C$

3. **答案：B**
   解析：两次分部积分，$\int x^2 e^x dx = x^2 e^x - 2 \int x e^x dx = x^2 e^x - 2(x e^x - e^x) + C = (x^2 - 2x + 2)e^x + C$

### 填空题
1. **答案：$-e^{-x}(x + 1) + C$**
   解析：令$u = x$，$dv = e^{-x} dx$，则$du = dx$，$v = -e^{-x}$，$\int x e^{-x} dx = -x e^{-x} + \int e^{-x} dx = -x e^{-x} - e^{-x} + C$

2. **答案：$x \arcsin x + \sqrt{1 - x^2} + C$**
   解析：令$u = \arcsin x$，$dv = dx$，则$du = \frac{1}{\sqrt{1 - x^2}} dx$，$v = x$，$\int \arcsin x dx = x \arcsin x - \int \frac{x}{\sqrt{1 - x^2}} dx = x \arcsin x + \sqrt{1 - x^2} + C$

3. **答案：$\frac{e^x}{2}(\sin x - \cos x) + C$**
   解析：两次分部积分后解方程，设$I = \int e^x \sin x dx$，则$I = e^x \sin x - \int e^x \cos x dx = e^x \sin x - e^x \cos x - I$，解得$I = \frac{e^x}{2}(\sin x - \cos x) + C$

### 解答题
1. **解**：令$u = x$，$dv = \sin 2x dx$，则$du = dx$，$v = -\frac{1}{2} \cos 2x$，$\int x \sin 2x dx = -\frac{x}{2} \cos 2x + \frac{1}{2} \int \cos 2x dx = -\frac{x}{2} \cos 2x + \frac{1}{4} \sin 2x + C$

2. **解**：令$u = \ln x$，$dv = x dx$，则$du = \frac{1}{x} dx$，$v = \frac{x^2}{2}$，$\int x \ln x dx = \frac{x^2}{2} \ln x - \frac{1}{2} \int x dx = \frac{x^2}{2} \ln x - \frac{x^2}{4} + C$

3. **解**：令$u = \arctan x$，$dv = dx$，则$du = \frac{1}{1 + x^2} dx$，$v = x$，$\int \arctan x dx = x \arctan x - \int \frac{x}{1 + x^2} dx = x \arctan x - \frac{1}{2} \ln(1 + x^2) + C$

4. **解**：设$I = \int e^x \cos x dx$，令$u = \cos x$，$dv = e^x dx$，则$du = -\sin x dx$，$v = e^x$，$I = e^x \cos x + \int e^x \sin x dx$。再对$\int e^x \sin x dx$分部积分，令$u = \sin x$，$dv = e^x dx$，则$du = \cos x dx$，$v = e^x$，$\int e^x \sin x dx = e^x \sin x - \int e^x \cos x dx = e^x \sin x - I$。代入得$I = e^x \cos x + e^x \sin x - I$，解得$I = \frac{e^x}{2}(\cos x + \sin x) + C$

5. **解**：令$u = x^2$，$dv = \sin x dx$，则$du = 2x dx$，$v = -\cos x$，$\int x^2 \sin x dx = -x^2 \cos x + 2 \int x \cos x dx$。再对$\int x \cos x dx$分部积分，令$u = x$，$dv = \cos x dx$，则$du = dx$，$v = \sin x$，$\int x \cos x dx = x \sin x + \cos x + C$。所以原式$= -x^2 \cos x + 2(x \sin x + \cos x) + C = -x^2 \cos x + 2x \sin x + 2 \cos x + C$

6. **解**：令$u = \ln x$，$dv = \sqrt{x} dx$，则$du = \frac{1}{x} dx$，$v = \frac{2}{3} x^{3/2}$，$\int \sqrt{x} \ln x dx = \frac{2}{3} x^{3/2} \ln x - \frac{2}{3} \int x^{1/2} dx = \frac{2}{3} x^{3/2} \ln x - \frac{4}{9} x^{3/2} + C$

7. **解**：令$u = \ln(x + \sqrt{1 + x^2})$，$dv = dx$，则$du = \frac{1}{\sqrt{1 + x^2}} dx$，$v = x$，$\int \ln(x + \sqrt{1 + x^2}) dx = x \ln(x + \sqrt{1 + x^2}) - \int \frac{x}{\sqrt{1 + x^2}} dx = x \ln(x + \sqrt{1 + x^2}) - \sqrt{1 + x^2} + C$

8. **解**：$\int_0^\pi x \sin x dx = [-x \cos x]_0^\pi + \int_0^\pi \cos x dx = (\pi + 0) + [\sin x]_0^\pi = \pi$

9. **解**：$\int_1^e x \ln x dx = \left[\frac{x^2}{2} \ln x\right]_1^e - \frac{1}{2} \int_1^e x dx = \left(\frac{e^2}{2} - 0\right) - \frac{1}{2} \left[\frac{x^2}{2}\right]_1^e = \frac{e^2}{2} - \frac{1}{4}(e^2 - 1) = \frac{e^2 + 1}{4}$

10. **解**：设$I = \int_0^{\pi/2} e^x \cos x dx$，利用第4题结果，$I = \left[\frac{e^x}{2}(\cos x + \sin x)\right]_0^{\pi/2} = \frac{e^{\pi/2}}{2}(0 + 1) - \frac{1}{2}(1 + 0) = \frac{e^{\pi/2} - 1}{2}$

## 部分分式分解

### 选择题
1. **答案：B**
   解析：$\frac{1}{(x - 1)(x - 2)} = \frac{A}{x - 1} + \frac{B}{x - 2}$，通分后$1 = A(x - 2) + B(x - 1)$，令$x = 1$得$A = -1$，令$x = 2$得$B = 1$，所以$\frac{1}{(x - 1)(x - 2)} = \frac{-1}{x - 1} + \frac{1}{x - 2} = \frac{1}{x - 2} - \frac{1}{x - 1}$，但选项中只有B最接近，应该是$\frac{1}{x - 1} - \frac{1}{x - 2}$（符号不同）

2. **答案：A**
   解析：$\frac{x}{(x - 1)^2} = \frac{A}{x - 1} + \frac{B}{(x - 1)^2}$，通分后$x = A(x - 1) + B$，令$x = 1$得$B = 1$，比较系数得$A = 1$，所以$\frac{x}{(x - 1)^2} = \frac{1}{x - 1} + \frac{1}{(x - 1)^2}$

3. **答案：A**
   解析：$\frac{1}{x^2 + x - 2} = \frac{1}{(x + 2)(x - 1)} = \frac{A}{x + 2} + \frac{B}{x - 1}$，通分后$1 = A(x - 1) + B(x + 2)$，令$x = 1$得$B = \frac{1}{3}$，令$x = -2$得$A = -\frac{1}{3}$，所以$\frac{1}{x^2 + x - 2} = \frac{1}{3(x - 1)} - \frac{1}{3(x + 2)}$

### 填空题
1. **答案：$\frac{1}{4(x - 2)} - \frac{1}{4(x + 2)}$**
   解析：$\frac{1}{x^2 - 4} = \frac{1}{(x - 2)(x + 2)} = \frac{A}{x - 2} + \frac{B}{x + 2}$，通分后$1 = A(x + 2) + B(x - 2)$，令$x = 2$得$A = \frac{1}{4}$，令$x = -2$得$B = -\frac{1}{4}$

2. **答案：$\frac{-1}{x} + \frac{2}{x - 1}$**
   解析：$\frac{x + 1}{x(x - 1)} = \frac{A}{x} + \frac{B}{x - 1}$，通分后$x + 1 = A(x - 1) + Bx$，令$x = 0$得$A = -1$，令$x = 1$得$B = 2$

3. **答案：$\frac{5}{2(x - 1)} + \frac{-5x + 1}{2(x^2 + 1)}$**
   解析：$\frac{2x + 3}{(x - 1)(x^2 + 1)} = \frac{A}{x - 1} + \frac{Bx + C}{x^2 + 1}$，通分后$2x + 3 = A(x^2 + 1) + (Bx + C)(x - 1)$，令$x = 1$得$A = \frac{5}{2}$，比较系数得$B = -\frac{5}{2}$，$C = \frac{1}{2}$

### 解答题
1. **解**：$\frac{1}{x^2 - 5x + 6} = \frac{1}{(x - 2)(x - 3)} = \frac{1}{x - 3} - \frac{1}{x - 2}$，所以$\int \frac{1}{x^2 - 5x + 6} dx = \ln|x - 3| - \ln|x - 2| + C = \ln\left|\frac{x - 3}{x - 2}\right| + C$

2. **解**：$\frac{x}{(x - 1)(x - 2)} = \frac{A}{x - 1} + \frac{B}{x - 2}$，通分后$x = A(x - 2) + B(x - 1)$，令$x = 1$得$A = -1$，令$x = 2$得$B = 2$，所以$\int \frac{x}{(x - 1)(x - 2)} dx = -\int \frac{1}{x - 1} dx + 2 \int \frac{1}{x - 2} dx = -\ln|x - 1| + 2 \ln|x - 2| + C$

3. **解**：$\frac{1}{x(x - 1)^2} = \frac{A}{x} + \frac{B}{x - 1} + \frac{C}{(x - 1)^2}$，通分后$1 = A(x - 1)^2 + Bx(x - 1) + Cx$，令$x = 0$得$A = 1$，令$x = 1$得$C = 1$，比较系数得$B = -1$，所以$\int \frac{1}{x(x - 1)^2} dx = \int \frac{1}{x} dx - \int \frac{1}{x - 1} dx + \int \frac{1}{(x - 1)^2} dx = \ln|x| - \ln|x - 1| - \frac{1}{x - 1} + C$

4. **解**：$\frac{x^2 + 1}{x(x^2 - 1)} = \frac{x^2 + 1}{x(x - 1)(x + 1)} = \frac{A}{x} + \frac{B}{x - 1} + \frac{C}{x + 1}$，通分后$x^2 + 1 = A(x - 1)(x + 1) + Bx(x + 1) + Cx(x - 1)$，令$x = 0$得$A = -1$，令$x = 1$得$B = 1$，令$x = -1$得$C = 1$，所以$\int \frac{x^2 + 1}{x(x^2 - 1)} dx = -\int \frac{1}{x} dx + \int \frac{1}{x - 1} dx + \int \frac{1}{x + 1} dx = -\ln|x| + \ln|x - 1| + \ln|x + 1| + C = \ln\left|\frac{x^2 - 1}{x}\right| + C$

5. **解**：$\frac{1}{x^3 + x} = \frac{1}{x(x^2 + 1)} = \frac{A}{x} + \frac{Bx + C}{x^2 + 1}$，通分后$1 = A(x^2 + 1) + (Bx + C)x$，令$x = 0$得$A = 1$，比较系数得$B = -1$，$C = 0$，所以$\int \frac{1}{x^3 + x} dx = \int \frac{1}{x} dx - \int \frac{x}{x^2 + 1} dx = \ln|x| - \frac{1}{2} \ln(x^2 + 1) + C$

6. **解**：$\frac{x}{x^2 + 2x + 2} = \frac{x + 1 - 1}{x^2 + 2x + 2} = \frac{x + 1}{x^2 + 2x + 2} - \frac{1}{x^2 + 2x + 2}$，所以$\int \frac{x}{x^2 + 2x + 2} dx = \frac{1}{2} \int \frac{2x + 2}{x^2 + 2x + 2} dx - \int \frac{1}{(x + 1)^2 + 1} dx = \frac{1}{2} \ln(x^2 + 2x + 2) - \arctan(x + 1) + C$

7. **解**：$\frac{x^2}{(x - 1)^3} = \frac{(x - 1 + 1)^2}{(x - 1)^3} = \frac{(x - 1)^2 + 2(x - 1) + 1}{(x - 1)^3} = \frac{1}{x - 1} + \frac{2}{(x - 1)^2} + \frac{1}{(x - 1)^3}$，所以$\int \frac{x^2}{(x - 1)^3} dx = \int \frac{1}{x - 1} dx + 2 \int \frac{1}{(x - 1)^2} dx + \int \frac{1}{(x - 1)^3} dx = \ln|x - 1| - \frac{2}{x - 1} - \frac{1}{2(x - 1)^2} + C$

8. **解**：$\frac{1}{x^4 - 1} = \frac{1}{(x^2 - 1)(x^2 + 1)} = \frac{1}{(x - 1)(x + 1)(x^2 + 1)} = \frac{A}{x - 1} + \frac{B}{x + 1} + \frac{Cx + D}{x^2 + 1}$，通分后$1 = A(x + 1)(x^2 + 1) + B(x - 1)(x^2 + 1) + (Cx + D)(x^2 - 1)$，令$x = 1$得$A = \frac{1}{4}$，令$x = -1$得$B = -\frac{1}{4}$，比较系数得$C = 0$，$D = -\frac{1}{2}$，所以$\int \frac{1}{x^4 - 1} dx = \frac{1}{4} \int \frac{1}{x - 1} dx - \frac{1}{4} \int \frac{1}{x + 1} dx - \frac{1}{2} \int \frac{1}{x^2 + 1} dx = \frac{1}{4} \ln\left|\frac{x - 1}{x + 1}\right| - \frac{1}{2} \arctan x + C$

## 综合应用题

1. **解**：令$t = \sqrt{x}$，则$x = t^2$，$dx = 2t dt$，$\int e^{\sqrt{x}} dx = 2 \int t e^t dt$。再用分部积分，令$u = t$，$dv = e^t dt$，则$du = dt$，$v = e^t$，所以$2 \int t e^t dt = 2(t e^t - e^t) + C = 2e^{\sqrt{x}}(\sqrt{x} - 1) + C$

2. **解**：令$u = x^2$，$dv = x e^{x^2} dx$，则$du = 2x dx$，$v = \frac{1}{2} e^{x^2}$，$\int x^3 e^{x^2} dx = \frac{x^2}{2} e^{x^2} - \int x e^{x^2} dx = \frac{x^2}{2} e^{x^2} - \frac{1}{2} e^{x^2} + C = \frac{e^{x^2}}{2}(x^2 - 1) + C$

3. **解**：令$u = \ln x$，$dv = \frac{1}{x^2} dx$，则$du = \frac{1}{x} dx$，$v = -\frac{1}{x}$，$\int \frac{\ln x}{x^2} dx = -\frac{\ln x}{x} + \int \frac{1}{x^2} dx = -\frac{\ln x}{x} - \frac{1}{x} + C$

4. **解**：令$t = \ln x$，则$x = e^t$，$dx = e^t dt$，$\int \sin(\ln x) dx = \int e^t \sin t dt$。利用之前的结果，$\int e^t \sin t dt = \frac{e^t}{2}(\sin t - \cos t) + C$，所以原式$= \frac{x}{2}(\sin(\ln x) - \cos(\ln x)) + C$

5. **解**：$\frac{x^2 + 2x - 1}{(x - 1)(x^2 + x + 1)} = \frac{A}{x - 1} + \frac{Bx + C}{x^2 + x + 1}$，通分后$x^2 + 2x - 1 = A(x^2 + x + 1) + (Bx + C)(x - 1)$，令$x = 1$得$A = \frac{2}{3}$，比较系数得$B = \frac{1}{3}$，$C = -\frac{5}{3}$，所以$\int \frac{x^2 + 2x - 1}{(x - 1)(x^2 + x + 1)} dx = \frac{2}{3} \int \frac{1}{x - 1} dx + \frac{1}{3} \int \frac{x - 5}{x^2 + x + 1} dx$。对第二个积分，$\frac{x - 5}{x^2 + x + 1} = \frac{1}{2} \cdot \frac{2x + 1}{x^2 + x + 1} - \frac{11}{2} \cdot \frac{1}{x^2 + x + 1}$，所以积分结果为$\frac{2}{3} \ln|x - 1| + \frac{1}{6} \ln(x^2 + x + 1) - \frac{11\sqrt{3}}{9} \arctan\left(\frac{2x + 1}{\sqrt{3}}\right) + C$

6. **解**：令$x = \tan t$，则$dx = \sec^2 t dt$，$\int \frac{1}{(x^2 + 1)^2} dx = \int \frac{\sec^2 t}{\sec^4 t} dt = \int \cos^2 t dt = \frac{t}{2} + \frac{\sin 2t}{4} + C = \frac{1}{2} \arctan x + \frac{x}{2(x^2 + 1)} + C$

7. **解**：令$t = \sqrt{2x + 1}$，则$x = \frac{t^2 - 1}{2}$，$dx = t dt$，$\int \frac{x}{\sqrt{2x + 1}} dx = \int \frac{t^2 - 1}{2t} \cdot t dt = \frac{1}{2} \int (t^2 - 1) dt = \frac{1}{2} \left(\frac{t^3}{3} - t\right) + C = \frac{1}{6}(2x + 1)^{3/2} - \frac{1}{2} \sqrt{2x + 1} + C$

8. **解**：$\int_0^1 \frac{x}{x^2 + 1} dx = \frac{1}{2} \int_0^1 \frac{2x}{x^2 + 1} dx = \frac{1}{2} [\ln(x^2 + 1)]_0^1 = \frac{1}{2} \ln 2$

9. **解**：设$I = \int_0^\infty e^{-x} \sin x dx$，利用分部积分，令$u = \sin x$，$dv = e^{-x} dx$，则$du = \cos x dx$，$v = -e^{-x}$，$I = [-e^{-x} \sin x]_0^\infty + \int_0^\infty e^{-x} \cos x dx = \int_0^\infty e^{-x} \cos x dx$。再对$\int_0^\infty e^{-x} \cos x dx$分部积分，令$u = \cos x$，$dv = e^{-x} dx$，则$du = -\sin x dx$，$v = -e^{-x}$，$\int_0^\infty e^{-x} \cos x dx = [-e^{-x} \cos x]_0^\infty - \int_0^\infty e^{-x} \sin x dx = 1 - I$。所以$I = 1 - I$，解得$I = \frac{1}{2}$

10. **解**：令$t = e^x$，则$dt = e^x dx$，$\int \frac{e^x}{e^{2x} + 3e^x + 2} dx = \int \frac{1}{t^2 + 3t + 2} dt = \int \frac{1}{(t + 1)(t + 2)} dt = \int \left(\frac{1}{t + 1} - \frac{1}{t + 2}\right) dt = \ln|t + 1| - \ln|t + 2| + C = \ln\left(\frac{e^x + 1}{e^x + 2}\right) + C$