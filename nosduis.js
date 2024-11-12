a, F = h; 
r = b; 
p = c; 

switch (F.tag) { 
    case 1: 
        x = F.payload; 
        if (typeof x === "function") { 
            l = x.call(p, l, r); 
            break a; 
        } 
        l = x; 
        break a; 

    case 3: 
        x.flags = x.flags & ~65537 | 128; 
    case 0: 
        x = F.payload; 
        r = typeof x === "function" ? x.call(p, l, r) : x; 
        if (r === null || r === undefined) 
            break a; 
        l = Object.assign({}, l, r); 
        break a; 

    case 2: 
        fb = true; 
}

if (h.callback !== null && h.lane !== 0) { 
    a.flags |= 64; 
    r = e.effects; 
    if (r === null) { 
        e.effects = [h]; 
    } else { 
        r.push(h); 
    }
} else { 
    p = { eventTime: p, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }; 
    if (n === null) { 
        m = n = p; 
        k = l; 
    } else { 
        n = n.next = p; 
    }
    g |= r; 
}

h = h.next; 
if (h === null) { 
    h = // continuation missing
}
