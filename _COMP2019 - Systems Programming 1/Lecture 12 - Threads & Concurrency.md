
> [!faq] About this Lecture
> Class: COMP2019
> Subject: #systemsProgramming1
> Topics: #coding/language/c  
> Date: 2025-05-29 at 16:02

## Introduction to Threads

- **Doing Several Things at Once**:
    - Web browsers and servers perform multiple tasks simultaneously using threads to handle multiple connections and tasks in parallel.

## Processes vs Threads

- **Definition**:
    - **Process**: Independent program running in its own memory space.
    - **Thread**: A lightweight process that shares memory space and resources of the parent process.

## Single vs Multithreaded Programs

- **Single Threaded Example**:
    
    ```c
    main() /*hello_single.c */ {
        void print_msg(char *);
        print_msg("hello");
        print_msg("world\n");
    }
    
    void print_msg(char *m) {
        int i;
        for(i=0; i<NUM; i++) {
            printf("%s", m);
            fflush(stdout); // flush user buffer
            sleep(1);
        }
    }
    ```
    

- **Multithreaded Program Example**:
    
    ```c
    /* hello_multi.c */
    main() {
        pthread_t t1, t2; // two threads
        void *print_msg(void *);
        pthread_create(&amp;t1, NULL, print_msg, (void *)"hello");
        pthread_create(&amp;t2, NULL, print_msg, (void *)"world\n");
        pthread_join(t1, NULL);
        pthread_join(t2, NULL);
    }
    
    void *print_msg(void *m) {
        char *cp = (char *) m;
        int i;
        for(i=0; i m);
            fflush(stdout);
            sleep(1);
        }
        return NULL;
    }
    ```
    

## Thread Creation

- **Header File**:
    - Use `pthread.h`.

- **Creating a Thread**:
    
    ```c
    pthread_create(pthread_t *thread, pthread_attr_t *attr, void *(*func)(void *), void *arg);
    ```
    
    - `thread`: identification structure.
    - `attr`: attributes of the thread.
    - `func`: thread entry point.
    - `arg`: argument passed to the thread.

- **Joining a Thread**:
    
    ```c
    pthread_join(pthread_t thread, void **retval);
    ```
    
    - `thread`: the thread to wait for.
    - `retval`: value to be filled in.

## Inter-thread Communication

- **Shared Memory and Global Variables**:
    
    - Threads can share global variables for communication.
- **Example**:
    
    ```c
    /* incprint.c */
    int counter = 0;
    main() {
        pthread_t t1; // one thread
        void *print_count(void *);
        int i;
        pthread_create(&amp;t1, NULL, print_count, NULL);
        for(i = 0; i &lt; NUM; i++) {
            counter++;
            sleep(1);
        }
        pthread_join(t1, NULL);
    }
    
    void *print_count(void *m) {
        int i;
        for(i = 0; i &lt; NUM; i++) {
            printf("count = %d\n", counter);
            sleep(1);
        }
        return NULL;
    }
    ```
    

## Inter-thread Cooperation

- **Counting Words in Two Files**:
    
    - **Version 1**: Shared counter with two threads.
    
    ```c
    main(int ac, char *av[]) /* twordcount1.c */
    {
        pthread_t t1, t2; // two threads
        void *count_words(void *);
        if (ac != 3) {
            printf("usage: %s file1 file2\n", av[0]);
            exit(1);
        }
        total_words = 0;
        pthread_create(&amp;t1, NULL, count_words, (void *) av[1]);
        pthread_create(&amp;t2, NULL, count_words, (void *) av[2]);
        pthread_join(t1, NULL);
        pthread_join(t2, NULL);
        printf("%5d: total words\n", total_words);
    }
    
    void *count_words(void *f) {
        char *filename = (char *) f;
        FILE *fp;
        int c, prevc = '\0';
        if ((fp = fopen(filename, "r")) != NULL) {
            while ((c = getc(fp)) != EOF) {
                if (!isalnum(c) && isalnum(prevc)) total_words++;
                prevc = c;
            }
            fclose(fp);
        } else perror(filename);
        return NULL;
    }
    ```
    

- **Potential Problem**:
    - Simultaneous access to the counter can cause race conditions.

- **Version 2**: Utilize Mutex for Thread Safety.
    
    ```c
    void *count_words(void *f) /* function for twordcount2.c */
    {
        char *filename = (char *) f;
        FILE *fp;
        int c, prevc = '\0';
        if ((fp = fopen(filename, "r")) != NULL) {
            while ((c = getc(fp)) != EOF) {
                if (!isalnum(c) && isalnum(prevc)) {
                    pthread_mutex_lock(&counter_lock);
                    total_words++;
                    pthread_mutex_unlock(&counter_lock);
                }
                prevc = c;
            }
            fclose(fp);
        } else perror(filename);
        return NULL;
    }
    ```
    

## Comparing Processes & Threads

- **Processes**: Own data space, file descriptors, process ID.
- **Threads**: Share data space, file descriptors, and process ID.

## Implications of Sharing

- Shared memory allows one thread to allocate and another to de-allocate, increasing risk of errors.
- Use experimentation to determine whether to use multi-threading or multi-processing.

## Inter-thread Notification

- **Condition Variables**:
    - `pthread_cond_wait`: Blocks until signaled and releases the specified mutex.
    - `pthread_cond_signal`: Unblocks one waiting thread.

## Example: Threads in Animation

- **Multithreaded Animation Example**:
    
    ```c
    /* tbounce1d.c */
    main() {
        int ndelay; 
        int c; 
        pthread_t msg_thread; 
        void *moving_msg();
        initscr(); 
        crmode(); noecho(); clear();
        // Initialize variables
        if (pthread_create(&amp;msg_thread, NULL, moving_msg, MESSAGE)) {
            fprintf(stderr, "error creating thread");
            endwin();
            exit(0);
        }
        // User input handling
        while(1) {
            ndelay = 0;
            c = getch();
            if (c == 'Q') break;
            // Handle other cases...
        }
        pthread_cancel(msg_thread);
        endwin();
    }
    
    

void *moving_msg(char *msg) { while(1) { usleep(delay * 1000); // Animation logic... } } 
```
