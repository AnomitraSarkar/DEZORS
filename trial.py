import matplotlib.pyplot as plt
import numpy as np

y = np.array([50, 10, 20, 20])
mylabels = ["Equity 50%", "Board 10%", "Dey 20%", "Sarkar 20%"]

plt.pie(y, labels = mylabels)
plt.show() 